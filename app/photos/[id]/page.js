import PhotoSizeSelector from '@/components/PhotoSizeSelector';
import Image from 'next/image'

export default async function PhotoDetails({ params}) {
    const { id } = await params;
    let photo = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/photos/${id}`);
    photo =  await photo.json();
    // console.log(id);

    if (!id || !photo) {
      throw new Error('Photo not found');
    }
    
  return (
    <div className="min-h-screen bg-gray-800 py-10">
      <div className="max-w-6xl mx-auto text-gray-200">
        
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className='border-2 border-gray-600 p-2 rounded'>
            <Image className='w-full h-auto rounded' src={photo?.src?.original} height={400} width={300} alt={photo.alt} />
          </div>
          <div>    
                <div>
                    <h2 className='text-2xl'>{photo.photographer}</h2>
                    <p className=''>Photographer</p>
                </div>     
                <div>
                    <PhotoSizeSelector src={photo.src}/>
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
          </div>
        </div>
      </div>
    </div>
  )
}
