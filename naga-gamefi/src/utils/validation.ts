export function isValidTweetUrl(url: string): boolean {
  const regex = /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]{1,15}\/status\/\d+(?:\?[\w=&]*)?$/;
  return regex.test(url);
}

export function isValidWebUrl(url: string): boolean {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // 协议
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // 域名
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // 或IP (v4)地址
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // 端口和路径
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // 查询字符串
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return pattern.test(url);
}

export function isValidDiscordInvite(url: string) {
  const pattern =
    /^(https?:\/\/)?(discord\.gg\/|discord\.com\/invite\/|discordapp\.com\/invite\/)[\w-]+$/i;
  return pattern.test(url);
}

export function extractDiscordInviteCode(url: string) {
  const match = url.match(/discord\.(gg|com\/invite|app\.com\/invite)\/([\w-]+)/);
  return match ? match[2] : null;
}

export function isValidYoutubeUrl(url: string): boolean {
  const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+(&[\w-]+)*$/;
  return pattern.test(url);
}
