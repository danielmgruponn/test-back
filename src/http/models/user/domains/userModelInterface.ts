export default interface userModelInterface
{
    id: number
    lan_id: number
    firebase_id: string | null
    full_name: string | null
    nick_name: string
    state: string | null
    last_seen: string
    avatar: string | null
    secret_key: string
    type: number
    membership: boolean
    personalized_state: string | null
    unblocked_option: string
    device_token: string | null
    referred_code: string
    rol: string
    refer_payment: number
    created_at: string
    updated_at: string
}