import { Prim } from '../../src/algorithms/Prim';
import { describe, expect, test } from '@jest/globals';

describe('Prim', () => {
    test('should find minimum spanning tree', () => {
        const graph = {
            'A': { 'B': 4, 'C': 2 },
            'B': { 'A': 4, 'C': 1, 'D': 5 },
            'C': { 'A': 2, 'B': 1, 'D': 8, 'E': 10 },
            'D': { 'B': 5, 'C': 8, 'E': 2 },
            'E': { 'C': 10, 'D': 2 }
        };
        
        const result = Prim.findMST(graph, 'A');
        
        expect(result.edges.length).toBe(4); // MST has V-1 edges
        expect(result.totalWeight).toBe(10);
    });

    test('should work with different start vertices', () => {
        const graph = {
            'A': { 'B': 4, 'C': 2 },
            'B': { 'A': 4, 'C': 1, 'D': 5 },
            'C': { 'A': 2, 'B': 1, 'D': 8, 'E': 10 },
            'D': { 'B': 5, 'C': 8, 'E': 2 },
            'E': { 'C': 10, 'D': 2 }
        };
        
        const result1 = Prim.findMST(graph, 'A');
        const result2 = Prim.findMST(graph, 'E');
        
        // Total weight should be same regardless of start vertex
        expect(result1.totalWeight).toBe(result2.totalWeight);
    });

    test('should handle simple graph', () => {
        const graph = {
            'A': { 'B': 1 },
            'B': { 'A': 1, 'C': 2 },
            'C': { 'B': 2 }
        };
        
        const result = Prim.findMST(graph, 'A');
        
        expect(result.edges.length).toBe(2);
        expect(result.totalWeight).toBe(3);
    });

    test('should handle single vertex', () => {
        const graph = {
            'A': {}
        };
        
        const result = Prim.findMST(graph, 'A');
        
        expect(result.edges.length).toBe(0);
        expect(result.totalWeight).toBe(0);
    });

    test('should convert edges to graph', () => {
        const edges = [
            { from: 'A', to: 'B', weight: 4 },
            { from: 'B', to: 'C', weight: 1 }
        ];
        
        const graph = Prim.edgesToGraph(edges);
        
        expect(graph['A']['B']).toBe(4);
        expect(graph['B']['A']).toBe(4);
        expect(graph['B']['C']).toBe(1);
        expect(graph['C']['B']).toBe(1);
    });

    test('should find MST from edge list', () => {
        const edges = [
            { from: 'A', to: 'B', weight: 4 },
            { from: 'A', to: 'C', weight: 2 },
            { from: 'B', to: 'C', weight: 1 },
            { from: 'B', to: 'D', weight: 5 },
            { from: 'C', to: 'D', weight: 8 },
            { from: 'C', to: 'E', weight: 10 },
            { from: 'D', to: 'E', weight: 2 }
        ];
        const vertices = ['A', 'B', 'C', 'D', 'E'];
        
        const result = Prim.findMSTFromEdges(vertices, edges);
        
        expect(result.edges.length).toBe(4);
        expect(result.totalWeight).toBe(10);
    });

    test('should handle empty graph', () => {
        const result = Prim.findMST({});
        expect(result.edges.length).toBe(0);
        expect(result.totalWeight).toBe(0);
    });
});
