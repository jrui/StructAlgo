import { BFS } from '../../src/algorithms/BFS';
import { describe, expect, test } from '@jest/globals';

describe('BFS', () => {
    const graph = {
        'A': ['B', 'C'],
        'B': ['A', 'D', 'E'],
        'C': ['A', 'F'],
        'D': ['B'],
        'E': ['B', 'F'],
        'F': ['C', 'E']
    };

    test('should traverse graph in BFS order', () => {
        const result = BFS.traverse(graph, 'A');
        expect(result).toContain('A');
        expect(result).toContain('B');
        expect(result).toContain('C');
        expect(result).toContain('D');
        expect(result).toContain('E');
        expect(result).toContain('F');
        expect(result.length).toBe(6);
        // A should be first
        expect(result[0]).toBe('A');
    });

    test('should find shortest path between two nodes', () => {
        const path = BFS.findPath(graph, 'A', 'F');
        expect(path).not.toBe(null);
        expect(path![0]).toBe('A');
        expect(path![path!.length - 1]).toBe('F');
        // Shortest path from A to F is A -> C -> F
        expect(path).toEqual(['A', 'C', 'F']);
    });

    test('should return null when no path exists', () => {
        const disconnected = {
            'A': ['B'],
            'B': ['A'],
            'C': ['D'],
            'D': ['C']
        };
        const path = BFS.findPath(disconnected, 'A', 'C');
        expect(path).toBe(null);
    });

    test('should return path when start equals end', () => {
        const path = BFS.findPath(graph, 'A', 'A');
        expect(path).toEqual(['A']);
    });

    test('should check if path exists', () => {
        expect(BFS.hasPath(graph, 'A', 'F')).toBe(true);
        expect(BFS.hasPath(graph, 'A', 'A')).toBe(true);
    });

    test('should find nodes at specific distance', () => {
        const nodes = BFS.nodesAtDistance(graph, 'A', 2);
        expect(nodes).toContain('D');
        expect(nodes).toContain('E');
        expect(nodes).toContain('F');
    });

    test('should handle nodes at distance 0', () => {
        const nodes = BFS.nodesAtDistance(graph, 'A', 0);
        expect(nodes).toEqual(['A']);
    });

    test('should handle empty graph', () => {
        const result = BFS.traverse({}, 'A');
        expect(result).toEqual(['A']);
    });
});
