import { Dijkstra } from '../../src/algorithms/Dijkstra';
import { describe, expect, test } from '@jest/globals';

describe('Dijkstra', () => {
    const graph = {
        'A': { 'B': 4, 'C': 2 },
        'B': { 'A': 4, 'C': 1, 'D': 5 },
        'C': { 'A': 2, 'B': 1, 'D': 8, 'E': 10 },
        'D': { 'B': 5, 'C': 8, 'E': 2 },
        'E': { 'C': 10, 'D': 2 }
    };

    test('should find shortest path between two nodes', () => {
        const result = Dijkstra.findShortestPath(graph, 'A', 'E');
        expect(result).not.toBe(null);
        expect(result!.path[0]).toBe('A');
        expect(result!.path[result!.path.length - 1]).toBe('E');
        expect(result!.distance).toBe(10);
    });

    test('should return correct path', () => {
        const result = Dijkstra.findShortestPath(graph, 'A', 'D');
        expect(result).not.toBe(null);
        expect(result!.path).toEqual(['A', 'C', 'B', 'D']);
        expect(result!.distance).toBe(8);
    });

    test('should handle direct path', () => {
        const result = Dijkstra.findShortestPath(graph, 'A', 'B');
        expect(result).not.toBe(null);
        expect(result!.path).toEqual(['A', 'C', 'B']);
        expect(result!.distance).toBe(3);
    });

    test('should return path when start equals end', () => {
        const result = Dijkstra.findShortestPath(graph, 'A', 'A');
        expect(result).not.toBe(null);
        expect(result!.path).toEqual(['A']);
        expect(result!.distance).toBe(0);
    });

    test('should return null when no path exists', () => {
        const disconnected = {
            'A': { 'B': 1 },
            'B': { 'A': 1 },
            'C': { 'D': 1 },
            'D': { 'C': 1 }
        };
        const result = Dijkstra.findShortestPath(disconnected, 'A', 'C');
        expect(result).toBe(null);
    });

    test('should find all shortest distances from a start node', () => {
        const distances = Dijkstra.findAllShortestDistances(graph, 'A');
        expect(distances['A']).toBe(0);
        expect(distances['B']).toBe(3);
        expect(distances['C']).toBe(2);
        expect(distances['D']).toBe(8);
        expect(distances['E']).toBe(10);
    });

    test('should handle unreachable nodes', () => {
        const disconnected = {
            'A': { 'B': 1 },
            'B': { 'A': 1 },
            'C': {}
        };
        const distances = Dijkstra.findAllShortestDistances(disconnected, 'A');
        expect(distances['A']).toBe(0);
        expect(distances['B']).toBe(1);
        expect(distances['C']).toBe(Infinity);
    });
});
