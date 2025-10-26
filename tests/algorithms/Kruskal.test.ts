import { Kruskal } from '../../src/algorithms/Kruskal';
import { describe, expect, test } from '@jest/globals';

describe('Kruskal', () => {
    test('should find minimum spanning tree', () => {
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
        
        const result = Kruskal.findMST(vertices, edges);
        
        expect(result.edges.length).toBe(4); // MST has V-1 edges
        expect(result.totalWeight).toBe(10);
    });

    test('should include correct edges in MST', () => {
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
        
        const result = Kruskal.findMST(vertices, edges);
        
        // Check that all edges in MST are from the original edge list
        for (const edge of result.edges) {
            expect(edges).toContainEqual(edge);
        }
    });

    test('should handle simple graph', () => {
        const edges = [
            { from: 'A', to: 'B', weight: 1 },
            { from: 'B', to: 'C', weight: 2 }
        ];
        const vertices = ['A', 'B', 'C'];
        
        const result = Kruskal.findMST(vertices, edges);
        
        expect(result.edges.length).toBe(2);
        expect(result.totalWeight).toBe(3);
    });

    test('should handle single edge', () => {
        const edges = [
            { from: 'A', to: 'B', weight: 5 }
        ];
        const vertices = ['A', 'B'];
        
        const result = Kruskal.findMST(vertices, edges);
        
        expect(result.edges.length).toBe(1);
        expect(result.totalWeight).toBe(5);
    });

    test('should check if graph is connected', () => {
        const edges = [
            { from: 'A', to: 'B', weight: 1 },
            { from: 'B', to: 'C', weight: 2 }
        ];
        const vertices = ['A', 'B', 'C'];
        
        expect(Kruskal.isConnected(vertices, edges)).toBe(true);
    });

    test('should detect disconnected graph', () => {
        const edges = [
            { from: 'A', to: 'B', weight: 1 },
            { from: 'C', to: 'D', weight: 2 }
        ];
        const vertices = ['A', 'B', 'C', 'D'];
        
        expect(Kruskal.isConnected(vertices, edges)).toBe(false);
    });

    test('should handle empty graph', () => {
        const result = Kruskal.findMST(['A'], []);
        expect(result.edges.length).toBe(0);
        expect(result.totalWeight).toBe(0);
    });
});
