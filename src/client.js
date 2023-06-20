import { createClient } from "@supabase/supabase-js";

export const SupaBase = createClient (
    "https://dmfteseduttpryfpjmhj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtZnRlc2VkdXR0cHJ5ZnBqbWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyMjY2MjYsImV4cCI6MjAwMjgwMjYyNn0.Q3VQItnWvC637QphATN_4KF_4foZ0R9fPEHceWc5MOc"
)