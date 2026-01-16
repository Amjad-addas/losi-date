
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://xsghlkwptrvbpqzbhqja.supabase.co'
const supabaseKey = "sb_publishable_eiwiBuRwNQS5uYS_l0DLdw_J3v4Q1bD"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase