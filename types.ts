
export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    oldPrice?: string;
    icon: string;
    category: string;
    badge?: string;
    rating?: number;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface Stat {
    icon: string;
    value: string;
    label: string;
}

export interface MissionVision {
    icon: string;
    title: string;
    text: string;
}

export interface Value {
    icon: string;
    title: string;
    text: string;
}

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    icon: string;
}

export interface Service {
    icon: string;
    title: string;
    description: string;
    features: string[];
}

export interface ContactCardInfo {
    icon: string;
    title: string;
    subtitle: string;
    detail: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}
