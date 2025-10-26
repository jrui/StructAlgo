import { DFS } from '../../src/algorithms/DFS';
import { describe, expect, test } from '@jest/globals';

describe('DFS', () => {
    const graph = {
        'A': ['B', 'C'],
        'B': ['A', 'D', 'E'],
        'C': ['A', 'F'],
        'D': ['B'],
        'E': ['B', 'F'],
        'F': ['C', 'E']
    };

    test('should traverse graph in DFS order (iterative)', () => {
        const result = DFS.traverse(graph, 'A');
        expect(result).toContain('A');
        expect(result).toContain('B');
        expect(result).toContain('C');
        expect(result).toContain('D');
        expect(result).toContain('E');
        expect(result).toContain('F');
        expect(result.length).toBe(6);
        expect(result[0]).toBe('A');
    });

    test('should traverse graph in DFS order (recursive)', () => {
        const result = DFS.traverseRecursive(graph, 'A');
        expect(result).toContain('A');
        expect(result).toContain('B');
        expect(result).toContain('C');
        expect(result).toContain('D');
        expect(result).toContain('E');
        expect(result).toContain('F');
        expect(result.length).toBe(6);
        expect(result[0]).toBe('A');
    });

    test('should find path between two nodes', () => {
        const path = DFS.findPath(graph, 'A', 'F');
        expect(path).not.toBe(null);
        expect(path![0]).toBe('A');
        expect(path![path!.length - 1]).toBe('F');
    });

    test('should find path recursively', () => {
        const path = DFS.findPathRecursive(graph, 'A', 'F');
        expect(path).not.toBe(null);
        expect(path![0]).toBe('A');
        expect(path![path!.length - 1]).toBe('F');
    });

    test('should return null when no path exists', () => {
        const disconnected = {
            'A': ['B'],
            'B': ['A'],
            'C': ['D'],
            'D': ['C']
        };
        const path = DFS.findPath(disconnected, 'A', 'C');
        expect(path).toBe(null);
    });

    test('should return path when start equals end', () => {
        const path = DFS.findPath(graph, 'A', 'A');
        expect(path).toEqual(['A']);
    });

    test('should check if path exists', () => {
        expect(DFS.hasPath(graph, 'A', 'F')).toBe(true);
        const disconnected = {
            'A': ['B'],
            'B': ['A'],
            'C': ['D'],
            'D': ['C']
        };
        expect(DFS.hasPath(disconnected, 'A', 'C')).toBe(false);
    });

    test('should detect cycles in graph', () => {
        const cyclicGraph = {
            'A': ['B'],
            'B': ['C'],
            'C': ['A']
        };
        expect(DFS.hasCycle(cyclicGraph)).toBe(true);

        const acyclicGraph = {
            'A': ['B', 'C'],
            'B': ['D'],
            'C': ['D'],
            'D': []
        };
        expect(DFS.hasCycle(acyclicGraph)).toBe(false);
    });
});
