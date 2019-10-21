export interface DialogExampleData {
  animal: 'panda' | 'unicorn' | 'lion';
}

export interface ItemsInterface {
  id: number;
  itemTitle: string;
  itemDescription: string;
}

export interface HomeInterface {
  id: number;
  title: string;
  description: string;
  items: ItemsInterface[];
}
