import { SearchState } from "@/pages/SearchPage";
import { Restaurant, RestaurantRequestResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (
  searchState: SearchState,
  city?: string
) => {
  // optional cuz undefined on 1st render
  const createSearchRequest = async (): Promise<RestaurantRequestResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to get Restaurant");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants", searchState], // will rexecute if searchState changes -> react query -> caching -> so update dependency array
    createSearchRequest,
    { enabled: !!city } // will run only when city exists
  );

  return {
    results,
    isLoading,
  };
};

export const useGetRestaurant = (restaurantId?: string) => {
  const getMyRestaurantRequest = async (): Promise<Restaurant> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/${restaurantId}`
    );
    if (!response.ok) {
      throw new Error("Failed to get Restaurant");
    }
    return response.json();
  };
  const { data: restaurant, isLoading } = useQuery(
    "GetMyRestaurant",
    getMyRestaurantRequest,
    {
      enabled: !!restaurantId,
    }
  );

  return {
    restaurant,
    isLoading,
  };
};
