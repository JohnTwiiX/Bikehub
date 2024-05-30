export interface Product {
    category: string
    color: string
    description: string
    dimensions: string
    images: [{
        url: string
        alt_text: string
    }]
    material: string
    name: string
    price: string
    sku: string
    status: boolean
    weight: string
}