/**
 * A* (A-Star) pathfinding algorithm
 * A* is an informed search algorithm that finds the shortest path between nodes.
 * It uses a heuristic function to estimate the cost from any node to the goal,
 * making it more efficient than Dijkstra's algorithm in many cases.
 *
 * Time Complexity: O(b^d) where b is branching factor and d is depth
 * Space Complexity: O(b^d)
 *
 * @example
 * // Grid-based pathfinding
 * const grid = [
 *   [0, 0, 0, 0],
 *   [0, 1, 1, 0],
 *   [0, 0, 0, 0],
 *   [0, 0, 0, 0]
 * ];
 * const start = { x: 0, y: 0 };
 * const goal = { x: 3, y: 3 };
 * AStar.findPathInGrid(grid, start, goal); // returns path
 */
interface Point {
    x: number;
    y: number;
}
export declare class AStar {
    /**
     * Finds the shortest path in a 2D grid using A* algorithm
     * @param grid - 2D array where 0 is walkable and 1 is obstacle
     * @param start - starting point
     * @param goal - goal point
     * @param allowDiagonal - whether diagonal movement is allowed
     * @returns array of points representing the path, or null if no path exists
     */
    static findPathInGrid(grid: number[][], start: Point, goal: Point, allowDiagonal?: boolean): Point[] | null;
    /**
     * Heuristic function (Manhattan distance)
     */
    private static heuristic;
    /**
     * Reconstructs the path from start to goal
     */
    private static reconstructPath;
    /**
     * Gets valid neighbors of a point in the grid
     */
    private static getNeighbors;
    /**
     * Checks if a point is valid in the grid
     */
    private static isValid;
}
export {};
