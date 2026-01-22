import { useEffect, useState } from "react";
import {
  fetchItems,
  addItem,
  updateItem,
  deleteItem,
  ShoppingItem
} from "../api/items";

import {
  Box,
  Card,
  CardContent,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  Typography,
  Container,
  Button
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export const ShoppingList = () => {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  const handleAdd = async () => {
    if (!name.trim()) return;
    const item = await addItem(name);
    setItems([item, ...items]);
    setName("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 4 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          🛒 Shopping List
        </Typography>

        <Box display="flex" gap={2} mb={3}>
          <TextField
            fullWidth
            label="Add a product"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleAdd}
            sx={{ minWidth: "60px" }}
          >
            <AddIcon />
          </Button>
        </Box>

        <List>
          {items.map((item) => (
            <ListItem
              key={item._id}
              secondaryAction={
                <IconButton
                  edge="end"
                  color="error"
                  onClick={() => {
                    deleteItem(item._id);
                    setItems(items.filter((i) => i._id !== item._id));
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              }
              sx={{
                bgcolor: "background.paper",
                borderRadius: 2,
                mb: 1,
                boxShadow: 1,
              }}
            >
              <Checkbox
                checked={item.bought}
                onChange={() => {
                  updateItem(item._id, !item.bought);
                  setItems((items) =>
                    items.map((i) =>
                      i._id === item._id ? { ...i, bought: !i.bought } : i
                    )
                  );
                }}
              />

              <ListItemText
                primary={item.name}
                sx={{
                  textDecoration: item.bought ? "line-through" : "none",
                  opacity: item.bought ? 0.6 : 1,
                }}
              />
            </ListItem>
          ))}
        </List>
        
      </Card>
    </Container>
  );
};
