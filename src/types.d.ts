interface IDish {
  id: string;
  name: string;
  description: string;
  price: number;
  urlImage: string;
}

interface IDishMutation {
  name: string;
  description: string;
  price: number;
  urlImage: string;
}

export interface DishCart {
  dish: IDish;
  amount: number;
}