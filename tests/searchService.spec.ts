// Test_7 - verifica se os resultados retornados são os esperados, ordenados por relevância.

import { search, SearchResult } from '../services/searchService';

describe('Search Service', () => {
    it('should return relevant search results', () => {
        const query = 'product';

        const expectedResults: SearchResult[] = [
            { id: '1', name: 'Product A', relevance: 0.8 },
            { id: '2', name: 'Product B', relevance: 0.7 },
            { id: '3', name: 'Product C', relevance: 0.6 },
            { id: '4', name: 'Product D', relevance: 0.5 },
            { id: '5', name: 'Product E', relevance: 0.4 }
        ];

        const results: SearchResult[] = search(query);

        expect(results).toEqual(expectedResults);
    });
});
