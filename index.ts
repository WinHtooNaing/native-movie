import { registerRootComponent } from "expo";

import Index from "./app/(tabs)/index";

// registerRootComponent calls AppRegistry.registerComponent('main', () => Index);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Index);
