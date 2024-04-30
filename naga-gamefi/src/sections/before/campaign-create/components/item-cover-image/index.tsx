import React, { forwardRef, useState } from 'react';
import { Uploader, Loader } from 'rsuite';

import './index.scss';
import Cookies from 'js-cookie';
import SvgIcon from 'src/components/svg-icon';
import { toast } from 'src/components/toast';
import { HOST_API } from 'src/config-global';
import { ajaxSignature } from 'src/utils/public';

const CampaignCreateItemCoverImage = forwardRef((props: any, ref) => {
  const { value: fieldValue, onChange: fieldOnChange, setIsLoading, isNFT, t, ...rest } = props;
  const [uploading, setUploading] = useState(false);

  return (
    <Uploader
      className="campaign-create-item-cover-image"
      action={`${HOST_API}/api/upload/uploadImage`}
      fileListVisible={false}
      listType="picture"
      ref={ref}
      {...rest}
      name="uploadFile"
      headers={{
        auToken: Cookies.get('auToken'),
        'Sign-Param': ajaxSignature(),
      }}
      onUpload={(filter) => {
        setUploading(true);
        setIsLoading(true);
        console.log(filter);
      }}
      onSuccess={(res) => {
        if (res.code === 0) {
          fieldOnChange(res.data);
          toast.success(t('public_upload_success'));
        } else {
          toast.error(t('public_upload_error'));
        }
        setUploading(false);
        setIsLoading(false);
      }}
      onError={() => {
        toast.error(t('public_upload_error'));
        setUploading(false);
        setIsLoading(false);
      }}
    >
      {fieldValue ? (
        <img src={fieldValue} alt="" />
      ) : (
        <div className="campaign-create-item-no-img">
          {uploading && <Loader backdrop center />}
          <SvgIcon name="uploader-icon" />
          <span>{t('campaign_create_campaign_cover_image_placeholder1')}</span>
          {!isNFT ? (
            <span>{t('campaign_create_campaign_cover_image_placeholder2')}</span>
          ) : undefined}
        </div>
      )}
    </Uploader>
  );
});

export default CampaignCreateItemCoverImage;
