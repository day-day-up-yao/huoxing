// PS: key放在store文件中，在app/layout.tsx中因为时会报错，swr module问题，如果加上use client, 因为是服务的组件，又会报错不能因为client component

export const routePathnameKey = 'routePathname';
