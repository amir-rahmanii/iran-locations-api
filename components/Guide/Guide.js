import { Container, Grid } from '@mui/material'
import React from 'react'
import GuideItem from './GuidItem'
import Item from './GuidItem'

const Guide = () => {
  return (
    <Grid width="100%" paddingY="50px">
      <Container>
        <GuideItem>
          <GuideItem.Title>تمامی استان های ایران</GuideItem.Title>
          <GuideItem.Description>با استفاده از دستور زیر میتوانید به تمامی استان های ایران به صورت یکجا دسترسی داشته باشید</GuideItem.Description>
          <GuideItem.Url>http://ali.com/api/v1/allStates</GuideItem.Url>
        </GuideItem>



        <GuideItem>
          <GuideItem.Title>تمامی شهر های ایران</GuideItem.Title>
          <GuideItem.Description>با استفاده از دستور زیر میتوانید به تمامی شهر های ایران به صورت یکجا دسترسی داشته باشید</GuideItem.Description>
          <GuideItem.Url>http://ali.com/api/v1/allCities</GuideItem.Url>
        </GuideItem>


        <GuideItem>
          <GuideItem.Title>شهر های یک استان</GuideItem.Title>
          <GuideItem.Description>شما میتوانید شهر های ایران را با وارد کردن نام استان به عنوان ورودی دریافت کنید</GuideItem.Description>
          <GuideItem.Url>http://ali.com/api/v1/cities?state=تهران</GuideItem.Url>
        </GuideItem>
      </Container>
    </Grid>
  )
}

export default Guide