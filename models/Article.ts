export enum ArticleSectionTypes {
    QUESTION_And_ANSWER = 1,
    TEXT = 2,
    HTML_BLOCK = 3,
    MARKDOWN_BLOCK = 4
}

export type Article = {
    id: string,
    title: string,
    subtitle: string,
    image_url: string,
    created_date: Date,
}

export type ArticleFilterParams = {
    limit?: number,
    category?: number
}

export type Category = {
    id: number,
    name: string
}

export type PrimaryContent = {
    id: number,
    articleId: string
    content: string
}

export type ShortSummary = {
    id: number,
    articleId: string
    content: string
}

export type ImageItem = {
    id: number,
    src: string
}

export type GallerySection = {
    id: number,
    articleId: string,
    image_item: ImageItem[]
}

export type QuestionAnswer = {
    id: number,
    question: string,
    answer: string,
}

export type KeyTerm = {
    id: number,
    term: string,
    definition: string,
}
