import { create } from "zustand";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("url", "anon key")

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    loading: false,


    signIn: async (payload) => {
        // TODO: EXPRESS THE LOGIC TO SIGN IN
        set({loading: true, error: null})

        const {data, error} = await supabase.auth.signInWithPassword({
            email: payload.email, 
            password: payload.password
        })

        set({loading: false, user: data.user, isAuthenticated: true, error: error})
    }
}))