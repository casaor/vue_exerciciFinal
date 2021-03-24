import ApiPlaceholder from './ApiPlaceholder'

export default
{
    GetPlaceholder()
    {
        return ApiPlaceholder().get('/pictures');
    }
};