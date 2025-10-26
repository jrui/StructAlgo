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

interface Node {
    point: Point;
    g: number; // Cost from start to this node
    h: number; // Heuristic cost from this node to goal
    f: number; // Total cost (g + h)
    parent: Node | null;
}

export class AStar {
    /**
     * Finds the shortest path in a 2D grid using A* algorithm
     * @param grid - 2D array where 0 is walkable and 1 is obstacle
     * @param start - starting point
     * @param goal - goal point
     * @param allowDiagonal - whether diagonal movement is allowed
     * @returns array of points representing the path, or null if no path exists
     */
    static findPathInGrid(
        grid: number[][],
        start: Point,
        goal: Point,
        allowDiagonal: boolean = false
    ): Point[] | null {
        const rows = grid.length;
        const cols = grid[0].length;

        // Check if start and goal are valid
        if (!this.isValid(grid, start) || !this.isValid(grid, goal)) {
            return null;
        }

        if (grid[start.y][start.x] === 1 || grid[goal.y][goal.x] === 1) {
            return null;
        }

        const openSet: Node[] = [];
        const closedSet = new Set<string>();

        const startNode: Node = {
            point: start,
            g: 0,
            h: this.heuristic(start, goal),
            f: 0,
            parent: null
        };
        startNode.f = startNode.g + startNode.h;
        openSet.push(startNode);

        while (openSet.length > 0) {
            // Find node with lowest f score
            let currentIndex = 0;
            for (let i = 1; i < openSet.length; i++) {
                if (openSet[i].f < openSet[currentIndex].f) {
                    currentIndex = i;
                }
            }

            const current = openSet[currentIndex];

            // Check if we reached the goal
            if (current.point.x === goal.x && current.point.y === goal.y) {
                return this.reconstructPath(current);
            }

            // Move current from open to closed
            openSet.splice(currentIndex, 1);
            closedSet.add(`${current.point.x},${current.point.y}`);

            // Check neighbors
            const neighbors = this.getNeighbors(grid, current.point, allowDiagonal);
            
            for (const neighbor of neighbors) {
                const neighborKey = `${neighbor.x},${neighbor.y}`;
                
                if (closedSet.has(neighborKey)) {
                    continue;
                }

                const gScore = current.g + 1;
                
                // Check if neighbor is in open set
                let neighborNode = openSet.find(
                    n => n.point.x === neighbor.x && n.point.y === neighbor.y
                );

                if (!neighborNode) {
                    neighborNode = {
                        point: neighbor,
                        g: gScore,
                        h: this.heuristic(neighbor, goal),
                        f: 0,
                        parent: current
                    };
                    neighborNode.f = neighborNode.g + neighborNode.h;
                    openSet.push(neighborNode);
                } else if (gScore < neighborNode.g) {
                    neighborNode.g = gScore;
                    neighborNode.f = neighborNode.g + neighborNode.h;
                    neighborNode.parent = current;
                }
            }
        }

        return null; // No path found
    }

    /**
     * Heuristic function (Manhattan distance)
     */
    private static heuristic(a: Point, b: Point): number {
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    }

    /**
     * Reconstructs the path from start to goal
     */
    private static reconstructPath(node: Node): Point[] {
        const path: Point[] = [];
        let current: Node | null = node;

        while (current !== null) {
            path.unshift(current.point);
            current = current.parent;
        }

        return path;
    }

    /**
     * Gets valid neighbors of a point in the grid
     */
    private static getNeighbors(grid: number[][], point: Point, allowDiagonal: boolean): Point[] {
        const neighbors: Point[] = [];
        const directions = allowDiagonal
            ? [
                { x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 },  // Cardinal
                { x: 1, y: -1 }, { x: 1, y: 1 }, { x: -1, y: 1 }, { x: -1, y: -1 }  // Diagonal
            ]
            : [
                { x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }   // Cardinal only
            ];

        for (const dir of directions) {
            const newPoint = { x: point.x + dir.x, y: point.y + dir.y };
            
            if (this.isValid(grid, newPoint) && grid[newPoint.y][newPoint.x] === 0) {
                neighbors.push(newPoint);
            }
        }

        return neighbors;
    }

    /**
     * Checks if a point is valid in the grid
     */
    private static isValid(grid: number[][], point: Point): boolean {
        return point.y >= 0 && point.y < grid.length && 
               point.x >= 0 && point.x < grid[0].length;
    }
}
