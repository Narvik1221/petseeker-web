export type Pet = {
  id: number;
  name: string;
  price: string;
  geo: string;
  images?: string[];
};



export type PetState = {
  pets: Pet[];
  loading: boolean;
  error: string | null;
};
