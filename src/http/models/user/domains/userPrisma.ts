export default interface userPrisma
{
    user_id: bigint
    lan_id: number
    user_firebase_id: string | null
    user_full_name: string | null
    user_nick_name: string
    user_state: string | null
    user_last_seen: Date
    user_avatar: string | null
    user_secret_key: string
    user_type: number
    user_membership: boolean
    user_personalized_state: string | null
    user_unblocked_option: string
    user_device_token: string | null
    user_referred_code: string
    user_rol: string
    user_refer_payment: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    remember_token: string | null
    user_data_updated: Date
}