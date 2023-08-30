import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rzhiudoruavjiurrcada.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6aGl1ZG9ydWF2aml1cnJjYWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzODU0MTQsImV4cCI6MjAwODk2MTQxNH0.Tch5YgFuXUfQfiT81WSG1dO-iWmQFQBfurWYGrNUPKQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
