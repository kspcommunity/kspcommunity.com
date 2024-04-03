// @deno-types="https://raw.githubusercontent.com/lucsoft-DevTeam/lucsoft.de/master/custom.d.ts"
import bbnHolding from "../assets/img/bbnHolding.svg";
// @deno-types="https://raw.githubusercontent.com/lucsoft-DevTeam/lucsoft.de/master/custom.d.ts"
import bbnMusicLogo from "../assets/img/bbnMusic.svg";
// @deno-types="https://raw.githubusercontent.com/lucsoft-DevTeam/lucsoft.de/master/custom.d.ts"
import bbnAdminLogo from "../assets/img/bbnAdmin.svg";
// @deno-types="https://raw.githubusercontent.com/lucsoft-DevTeam/lucsoft.de/master/custom.d.ts"
import bbnWalletLogo from "../assets/img/bbnWallet.svg";

import { Permission } from "shared/mod.ts";

// 0: no login required, 1: show only when logged in, 2: show only when logged out
export const pages: [logo: string, perm: Array<Permission>, route: string, login: 0 | 1 | 2][] = [
    [bbnHolding, [], "/", 0],
    [bbnMusicLogo, [], "/c/music", 1],
    [bbnMusicLogo, [], "/music", 2],
    [bbnWalletLogo, [], "/wallet", 1],
    [bbnAdminLogo, ["/bbn/manage", "/hmsys/user"], "/admin", 1],
];

// Moved this to the up array when we use the hmsys permission system
export const loginRequired = [
    "/c/music",
    "/admin",
    "/oauth",
    "/wallet",
];

export function activeLogo(type: string) {
    if (type == "Music") {
        return bbnMusicLogo;
    }
    if (type == "Wallet") {
        return bbnWalletLogo;
    }
    if (type == "Admin") {
        return bbnAdminLogo;
    }
    return bbnHolding;
}

export function activeTitle(type: string) {
    if (type == "Music") {
        return "KSPC Music";
    }
    if (type == "Wallet") {
        return "KSPC Wallet";
    }
    if (type == "Admin") {
        return "KSPC Admin";
    }
    return "KSPC Holding";
}
