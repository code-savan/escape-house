
export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'massage' | 'body' | 'facial';
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
}

export interface Feature {
  title: string;
  description: string;
}
