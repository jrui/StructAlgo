import { AStar } from '../../src/algorithms/AStar';
import { describe, expect, test } from '@jest/globals';

describe('AStar', () => {
    test('should find path in simple grid', () => {
        const grid = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        const start = { x: 0, y: 0 };
        const goal = { x: 3, y: 3 };
        const path = AStar.findPathInGrid(grid, start, goal);
        
        expect(path).not.toBe(null);
        expect(path![0]).toEqual(start);
        expect(path![path!.length - 1]).toEqual(goal);
    });

    test('should find path around obstacles', () => {
        const grid = [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ];
        const start = { x: 0, y: 0 };
        const goal = { x: 3, y: 3 };
        const path = AStar.findPathInGrid(grid, start, goal);
        
        expect(path).not.toBe(null);
        expect(path![0]).toEqual(start);
        expect(path![path!.length - 1]).toEqual(goal);
        
        // Path should not contain obstacles
        for (const point of path!) {
            expect(grid[point.y][point.x]).toBe(0);
        }
    });

    test('should return null when no path exists', () => {
        const grid = [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        const start = { x: 0, y: 0 };
        const goal = { x: 0, y: 3 };
        const path = AStar.findPathInGrid(grid, start, goal);
        
        expect(path).toBe(null);
    });

    test('should return null when start is obstacle', () => {
        const grid = [
            [1, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        const start = { x: 0, y: 0 };
        const goal = { x: 3, y: 3 };
        const path = AStar.findPathInGrid(grid, start, goal);
        
        expect(path).toBe(null);
    });

    test('should return null when goal is obstacle', () => {
        const grid = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 1]
        ];
        const start = { x: 0, y: 0 };
        const goal = { x: 3, y: 3 };
        const path = AStar.findPathInGrid(grid, start, goal);
        
        expect(path).toBe(null);
    });

    test('should return path when start equals goal', () => {
        const grid = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        const start = { x: 0, y: 0 };
        const goal = { x: 0, y: 0 };
        const path = AStar.findPathInGrid(grid, start, goal);
        
        expect(path).not.toBe(null);
        expect(path).toEqual([start]);
    });

    test('should work with diagonal movement', () => {
        const grid = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        const start = { x: 0, y: 0 };
        const goal = { x: 3, y: 3 };
        const path = AStar.findPathInGrid(grid, start, goal, true);
        
        expect(path).not.toBe(null);
        expect(path![0]).toEqual(start);
        expect(path![path!.length - 1]).toEqual(goal);
        // With diagonal movement, path should be shorter
        expect(path!.length).toBeLessThan(7);
    });
});
