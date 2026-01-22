export interface ShoppingItem {
  _id: string;
  name: string;
  bought: boolean;
}

const API_URL = "http://localhost:4000/items";

export const fetchItems = async (): Promise<ShoppingItem[]> =>
  fetch(API_URL).then(res => res.json());

export const addItem = async (name: string): Promise<ShoppingItem> =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  }).then(res => res.json());

export const updateItem = async (id: string, bought: boolean) =>
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bought })
  });

export const deleteItem = async (id: string) =>
  fetch(`${API_URL}/${id}`, { method: "DELETE" });