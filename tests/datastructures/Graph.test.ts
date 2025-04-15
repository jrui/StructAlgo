import { Graph } from '../../src/datastructures/Graph';
import { describe, expect, test } from '@jest/globals';


describe('Graph', () => {
    test('constructor', () => {
        const graph = new Graph(10);
        expect(graph).toBeDefined();
    });


    const defaultWeight = 0;
    const graph = new Graph(10, defaultWeight);
    test('addEdge', () => {
        graph.addEdge(0, 1, 2);
        expect(graph.getWeight(0, 1)).toEqual(2);
        expect(graph.getWeight(1, 0)).toEqual(2);
    });

    test('removeEdge', () => {
        graph.removeEdge(0, 1);
        expect(graph.getWeight(0, 1)).toEqual(defaultWeight);
        expect(graph.getWeight(1, 0)).toEqual(defaultWeight);
    });

    test('isEdge', () => {
        graph.addEdge(3, 5, 10);
        expect(graph.isEdge(3, 5)).toEqual(true);
        expect(graph.isEdge(5, 3)).toEqual(true);
        graph.removeEdge(5, 3);
        expect(graph.isEdge(3, 5)).toEqual(false);
        expect(graph.isEdge(5, 3)).toEqual(false);
    });

    test('getWeight', () => {
        graph.addEdge(2, 4, 5);
        expect(graph.getWeight(2, 4)).toEqual(5);
        expect(graph.getWeight(4, 2)).toEqual(5);
        graph.removeEdge(2, 4);
    });

    test('getNeighbors', () => {
        graph.addEdge(1, 2, 5);
        graph.addEdge(1, 3, 5);
        expect(graph.getNeighbors(1)).toEqual([2, 3]);
        expect(graph.getNeighbors(2)).toEqual([1]);
        expect(graph.getNeighbors(3)).toEqual([1]);
    });

    test('getAllEdges', () => {
        graph.addEdge(0, 1, 2);
        graph.addEdge(1, 2, 3);
        expect(graph.getAllEdges()).toEqual([
            [0, 1, 2],
            [1, 0, 2],
            [1, 2, 3],
            [1, 3, 5],
            [2, 1, 3],
            [3, 1, 5],
        ]);
        expect(graph.getWeightMatrix()).toEqual([
            [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 3, 5, 0, 0, 0, 0, 0, 0],
            [0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 5, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]);
    });

    test('getAllNodes', () => {
        const emptyGraph = new Graph(5);
        expect(emptyGraph.getAllNodes()).toEqual([0, 1, 2, 3, 4]);
    });

    test('getWeightMatrix', () => {
        const emptyGraph = new Graph(5);
        expect(emptyGraph.getWeightMatrix()).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]);
        emptyGraph.addEdge(0, 1, 2);
        emptyGraph.addEdge(1, 2, 3);
        expect(emptyGraph.getWeightMatrix()).toEqual([
            [0, 2, 0, 0, 0],
            [2, 0, 3, 0, 0],
            [0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]);
    });

    test('getDefaultWeight', () => {
        expect(graph.getDefaultWeight()).toEqual(defaultWeight);
    });
});
