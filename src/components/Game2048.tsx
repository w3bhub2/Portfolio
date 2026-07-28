import { useCallback, useEffect, useRef, useState } from "react";

type Tile = { id: number; value: number; row: number; col: number; merged?: boolean; isNew?: boolean };

const SIZE = 4;

const COLORS: Record<number, string> = {
  2: "bg-slate-200 text-slate-800",
  4: "bg-amber-100 text-slate-800",
  8: "bg-orange-400 text-white",
  16: "bg-orange-500 text-white",
  32: "bg-red-500 text-white",
  64: "bg-red-600 text-white",
  128: "bg-yellow-400 text-white",
  256: "bg-yellow-500 text-white",
  512: "bg-amber-500 text-white",
  1024: "bg-amber-600 text-white",
  2048: "bg-gradient-to-br from-indigo-500 to-violet-600 text-white",
};

function emptyBoard(): (Tile | null)[][] {
  return Array.from({ length: SIZE }, () => Array<Tile | null>(SIZE).fill(null));
}

function addRandomTile(board: (Tile | null)[][], nextId: number): { board: (Tile | null)[][]; id: number } {
  const empties: [number, number][] = [];
  for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) if (!board[r][c]) empties.push([r, c]);
  if (empties.length === 0) return { board, id: nextId };
  const [r, c] = empties[Math.floor(Math.random() * empties.length)];
  board[r][c] = { id: nextId, value: Math.random() < 0.9 ? 2 : 4, row: r, col: c, isNew: true };
  return { board, id: nextId + 1 };
}

function cloneBoard(b: (Tile | null)[][]): (Tile | null)[][] {
  return b.map((row) => row.map((t) => (t ? { ...t } : null)));
}

function initBoard() {
  let b = emptyBoard();
  let id = 1;
  ({ board: b, id } = addRandomTile(b, id));
  ({ board: b, id } = addRandomTile(b, id));
  return { board: b, id };
}

type Move = "up" | "down" | "left" | "right";

function slideLine(line: (Tile | null)[]): { line: (Tile | null)[]; gained: number; moved: boolean } {
  const compact = line.filter((t): t is Tile => !!t);
  const result: (Tile | null)[] = [];
  let gained = 0;
  let moved = false;
  let i = 0;
  while (i < compact.length) {
    if (i + 1 < compact.length && compact[i].value === compact[i + 1].value) {
      const newVal = compact[i].value * 2;
      gained += newVal;
      result.push({ id: compact[i].id, value: newVal, row: 0, col: 0, merged: true });
      i += 2;
      moved = true;
    } else {
      result.push({ ...compact[i] });
      i += 1;
    }
  }
  while (result.length < SIZE) result.push(null);
  if (!moved) {
    for (let k = 0; k < SIZE; k++) {
      if (line[k]?.id !== result[k]?.id) { moved = true; break; }
    }
  }
  return { line: result, gained, moved };
}

function move(board: (Tile | null)[][], dir: Move, nextId: number): { board: (Tile | null)[][]; gained: number; moved: boolean; nextId: number } {
  const nb = cloneBoard(board);
  let totalGained = 0;
  let anyMoved = false;

  const processLine = (line: (Tile | null)[], write: (line: (Tile | null)[]) => void) => {
    const { line: newLine, gained, moved } = slideLine(line);
    if (moved) anyMoved = true;
    totalGained += gained;
    write(newLine);
  };

  if (dir === "left") {
    for (let r = 0; r < SIZE; r++) {
      const line = nb[r].slice();
      processLine(line, (l) => { for (let c = 0; c < SIZE; c++) nb[r][c] = l[c]; });
    }
  } else if (dir === "right") {
    for (let r = 0; r < SIZE; r++) {
      const line = nb[r].slice().reverse();
      processLine(line, (l) => { const rev = l.reverse(); for (let c = 0; c < SIZE; c++) nb[r][c] = rev[c]; });
    }
  } else if (dir === "up") {
    for (let c = 0; c < SIZE; c++) {
      const line = nb.map((row) => row[c]);
      processLine(line, (l) => { for (let r = 0; r < SIZE; r++) nb[r][c] = l[r]; });
    }
  } else {
    for (let c = 0; c < SIZE; c++) {
      const line = nb.map((row) => row[c]).reverse();
      processLine(line, (l) => { const rev = l.reverse(); for (let r = 0; r < SIZE; r++) nb[r][c] = rev[r]; });
    }
  }

  for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) {
    const t = nb[r][c];
    if (t) { t.row = r; t.col = c; }
  }

  let id = nextId;
  if (anyMoved) {
    const res = addRandomTile(nb, id);
    id = res.id;
  }

  return { board: nb, gained: totalGained, moved: anyMoved, nextId: id };
}

function hasWon(board: (Tile | null)[][]): boolean {
  for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) if (board[r][c]?.value === 2048) return true;
  return false;
}

function canMove(board: (Tile | null)[][]): boolean {
  for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) {
    if (!board[r][c]) return true;
    const v = board[r][c]!.value;
    if (r + 1 < SIZE && board[r + 1][c]?.value === v) return true;
    if (c + 1 < SIZE && board[r][c + 1]?.value === v) return true;
  }
  return false;
}

const INTRO_KEY = "ug-2048-intro-seen";

export default function Game2048() {
  const [{ board, nextId }, setBoard] = useState(() => {
    const { board, id } = initBoard();
    return { board, nextId: id };
  });
  const [score, setScore] = useState(0);
  const [best, setBest] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    const v = localStorage.getItem("ug-2048-best");
    return v ? parseInt(v, 10) : 0;
  });
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem(INTRO_KEY);
  });
  const touchRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (score > best) {
      setBest(score);
      localStorage.setItem("ug-2048-best", String(score));
    }
  }, [score, best]);

  const dismissIntro = useCallback(() => {
    setShowIntro(false);
    try { localStorage.setItem(INTRO_KEY, "1"); } catch {}
  }, []);

  const doMove = useCallback(
    (dir: Move) => {
      if (lost) return;
      const { board: nb, gained, moved, nextId: nid } = move(board, dir, nextId);
      if (!moved) return;
      setBoard({ board: nb, nextId: nid });
      setScore((s) => s + gained);
      if (!won && hasWon(nb)) setWon(true);
      else if (!canMove(nb)) setLost(true);
    },
    [board, nextId, lost, won]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const map: Record<string, Move> = {
        ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right",
        w: "up", s: "down", a: "left", d: "right",
      };
      const d = map[e.key];
      if (d) { e.preventDefault(); doMove(d); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [doMove]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchRef.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;
    const adx = Math.abs(dx);
    const ady = Math.abs(dy);
    const threshold = 24;
    if (Math.max(adx, ady) < threshold) return;
    if (adx > ady) doMove(dx > 0 ? "right" : "left");
    else doMove(dy > 0 ? "down" : "up");
    touchRef.current = null;
  };

  const reset = () => {
    const { board, id } = initBoard();
    setBoard({ board, nextId: id });
    setScore(0);
    setWon(false);
    setLost(false);
  };

  const tiles: Tile[] = [];
  for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) {
    const t = board[r][c];
    if (t) tiles.push(t);
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-center">
            <div className="text-[10px] uppercase tracking-wider text-slate-400">Score</div>
            <div className="font-semibold text-white">{score}</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-center">
            <div className="text-[10px] uppercase tracking-wider text-slate-400">Best</div>
            <div className="font-semibold text-indigo-400">{best}</div>
          </div>
        </div>
        <button
          onClick={reset}
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          New Game
        </button>
      </div>

      <div
        className="relative touch-none select-none rounded-2xl bg-slate-800/60 p-2 sm:p-3"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="application"
        aria-label="2048 game board — swipe or use arrow keys"
      >
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-md bg-slate-700/50 sm:rounded-lg" />
          ))}
        </div>

        <div className="absolute inset-2 sm:inset-3 grid grid-cols-4 grid-rows-4 gap-2 sm:gap-3">
          {tiles.map((t) => {
            const color = COLORS[t.value] ?? "bg-slate-900 text-white";
            const textSize =
              t.value < 100
                ? "text-2xl sm:text-3xl"
                : t.value < 1000
                ? "text-xl sm:text-2xl"
                : "text-base sm:text-lg";
            return (
              <div
                key={t.id}
                className={`flex aspect-square items-center justify-center rounded-md font-bold sm:rounded-lg ${color} ${textSize} shadow-lg transition-all duration-100`}
                style={{ gridColumnStart: t.col + 1, gridRowStart: t.row + 1 }}
              >
                {t.value}
              </div>
            );
          })}
        </div>

        {/* One-time intro overlay — shows once per device, then remembers */}
        {showIntro && (
          <div className="absolute inset-2 sm:inset-3 flex items-center justify-center rounded-2xl bg-slate-950/90 backdrop-blur">
            <div className="px-6 py-5 text-center">
              <p className="text-lg font-bold text-white sm:text-xl">How to play</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                Swipe on mobile, use <span className="font-semibold text-white">arrow keys</span> or <span className="font-semibold text-white">WASD</span> on desktop.
                <br />
                Match same numbers to combine them.
                <br />
                Reach <span className="font-bold text-indigo-400">2048</span> to win.
              </p>
              <button
                onClick={dismissIntro}
                className="mt-4 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30"
              >
                Got it — let's play
              </button>
            </div>
          </div>
        )}

        {(won || lost) && (
          <div className="absolute inset-2 sm:inset-3 flex items-center justify-center rounded-2xl bg-slate-950/80 backdrop-blur">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">
                {won ? "You reached 2048! 🎉" : "Game Over"}
              </p>
              <p className="mt-1 text-sm text-slate-400">Final score: {score}</p>
              <button
                onClick={reset}
                className="mt-4 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2 text-sm font-medium text-white"
              >
                Play again
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="mt-3 text-center text-xs text-slate-500">
        Swipe · arrow keys · WASD
      </p>
    </div>
  );
}
