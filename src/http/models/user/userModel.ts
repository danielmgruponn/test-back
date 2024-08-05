import userModelInterface from "./domains/userModelInterface";
import userPrisma from "./domains/userPrisma";

export default function userModel(user: userPrisma): userModelInterface {
    return {
        id: Number(user.user_id),
        lan_id: user.lan_id,
        firebase_id: user.user_firebase_id,
        full_name: user.user_full_name,
        nick_name: user.user_nick_name,
        state: user.user_state,
        last_seen: user.user_last_seen.toString(),
        avatar: user.user_avatar,
        secret_key: user.user_secret_key,
        type: user.user_type,
        membership: user.user_membership,
        personalized_state: user.user_personalized_state,
        unblocked_option: user.user_unblocked_option,
        device_token: user.user_device_token,
        referred_code: user.user_referred_code,
        rol: user.user_rol,
        refer_payment: user.user_refer_payment,
        created_at: user.created_at.toString(),
        updated_at: user.updated_at.toString()
    }
}