export const FETCH_USERS_WITH_PHONE_NUMBERS=`
SELECT
u.id,
u.first_name,
u.last_name,
u.email,
u.is_active,
u.created_at,
json_strip_nulls(json_agg(
    json_build_object(
        'id',upn.id,
        'phone_number',upn.phone_number,
        'type',upn.type

        )
    ))As phone_numbers
From users u
LEFT JOIN user_phone_number upn on u.id=upn.user_id
WHERE u.is_active=true
GROUP BY u.id
`;