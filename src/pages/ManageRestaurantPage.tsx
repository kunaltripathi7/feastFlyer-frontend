import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

function ManageRestaurantPage() {
  const { isLoading: isPostLoading, createRestaurant } =
    useCreateMyRestaurant();
  const { isLoading: isPutLoading, updateRestaurant } = useUpdateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const editing = !!restaurant; // truthy -> if exists

  return (
    <ManageRestaurantForm
      onSave={editing ? updateRestaurant : createRestaurant}
      isLoading={isPostLoading || isPutLoading}
      restaurant={restaurant}
    />
  );
}

export default ManageRestaurantPage;
