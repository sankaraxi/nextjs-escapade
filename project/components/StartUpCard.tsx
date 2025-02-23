import { formateDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react';
import React from 'react'

const StartUpCard = ({post}:{post: StartUpCardType}) => {
    const {_createdAt, _id, views, author:{_id:authorId, name}, description, image, category, title} = post;
  return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>
                {formateDate(_createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary'/>
                <span className='text-16-mwdium'>{views}</span>
            </div>
        </div>
        <div>
            
        </div>
    </li>
  )
}

export default StartUpCard