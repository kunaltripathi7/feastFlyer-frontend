import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import UserProfileForm, {
  UserFormData,
} from "@/forms/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";

type props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
  isLoading: boolean;
};

function CheckoutButton({ onCheckout, disabled, isLoading }: props) {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

  const onLogin = async () => {
    await loginWithRedirect({
      // async
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated)
    return (
      <Button onClick={onLogin} className="bg-orange-500 flex-1">
        Log in to Checkout
      </Button>
    );

  if (isAuthLoading || !currentUser || isLoading) {
    // undefined while the api req happens
    return <LoadingButton />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className="bg-orange-500 flex-1">
          Go to Checkout
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-[425px] md:min-w-[700px] bg-gray-50 "
        aria-describedby="na"
      >
        <DialogTitle>Continue to payment page!</DialogTitle>
        <UserProfileForm
          currentUser={currentUser}
          isLoading={isGetUserLoading}
          onSave={onCheckout}
          title="Confirm Delivery Details"
          buttonTxt="Continue To Payment"
        />
      </DialogContent>
    </Dialog>
  );
}

export default CheckoutButton;
