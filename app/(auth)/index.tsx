import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Props for the reusable social sign-in button
type SocialButtonProps = {
  icon: number;
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

// Shared shadow to keep buttons consistent across platforms
const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.08,
  shadowRadius: 6,
  elevation: 2,
};

const isLoading = false;

// Reusable button UI for Google/Apple sign-in options
function SocialButton({ icon, label, onPress, disabled }: SocialButtonProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
      onPress={onPress}
      disabled={disabled || isLoading}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[shadowStyle, disabled ? { opacity: 0.6 } : null]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#000" />
      ) : (
        <View className="flex-row items-center justify-center">
          <Image source={icon} className="size-10 mr-5" resizeMode="contain" />
          <Text className="text-black font-medium text-base">{label}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default function Index() {
  const isLoading = false;

  return (
    // Screen container: fills available space, centers content, adds padding & background
    <View className="flex-1 px-8 justify-center bg-slate-100">
      {/* Hero/illustration area */}
      <View className="items-center">
        <Image
          source={require("../../assets/images/auth1.png")}
          className="size-80"
          resizeMode="contain"
        />
      </View>

      {/* Social sign-in buttons stack */}
      <View className="flex-col gap-3 mt-6">
        <SocialButton
          icon={require("../../assets/images/google.png")}
          label="Sign in with Google"
          onPress={() => {}}
          disabled={isLoading}
        />
        <SocialButton
          icon={require("../../assets/images/apple.png")}
          label="Sign in with Apple"
          onPress={() => {}}
          disabled={isLoading}
        />
        <View className="justify-center items-center">
          <Text className="text-gray-400"> Here iam Lol</Text>
        </View>
      </View>
    </View>
  );
}
