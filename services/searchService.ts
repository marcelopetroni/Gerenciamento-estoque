// Gerenciamento-estoque/services/searchService.ts

export interface SearchResult {
    id: string;
    name: string;
    relevance: number;
}

export function search(query: string): SearchResult[] {
    // Simulação de resultados relevantes para a pesquisa
    const results: SearchResult[] = [
        { id: '1', name: 'Product A', relevance: 0.8 },
        { id: '2', name: 'Product B', relevance: 0.7 },
        { id: '3', name: 'Product C', relevance: 0.6 },
        { id: '4', name: 'Product D', relevance: 0.5 },
        { id: '5', name: 'Product E', relevance: 0.4 }
    ];

    // Ordena os resultados por relevância
    results.sort((a, b) => b.relevance - a.relevance);

    return results;
}
