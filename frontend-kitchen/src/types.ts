export interface OrderItem {
  itemName: string
  size: string
  addons: string[]
  quantity: number
}

export interface Order {
  id: number // Assuming 'id' is the table number for simplicity as a unique key
  tableNumber: number
  timestamp: string
  orders: OrderItem[]
  status: 'New' | 'In Progress' | 'Ready' | 'Served'
}
