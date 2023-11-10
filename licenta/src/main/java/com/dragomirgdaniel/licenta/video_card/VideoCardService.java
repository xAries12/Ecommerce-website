package com.dragomirgdaniel.licenta.video_card;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VideoCardService {
    private final VideoCardRepository videoCardRepository;

    public VideoCardService(VideoCardRepository videoCardRepository) {
        this.videoCardRepository = videoCardRepository;
    }

    public List<VideoCard> findAll() {
        return videoCardRepository.findAll();
    }

    public <S extends VideoCard> S save(S entity) {
        return videoCardRepository.save(entity);
    }

    public void update(VideoCard entity,Integer idVideoCard) {
        Optional<VideoCard> videoCard = videoCardRepository.findById(idVideoCard);
        Optional<VideoCard> videoCard1 = videoCard.map(videoCard2 -> {
            videoCard2.setImage(entity.getImage());
            videoCard2.setStock(entity.getStock());
            videoCard2.setName(""+entity.getProducer()+" "+entity.getModel());
            videoCard2.setCategory(entity.getCategory());
            videoCard2.setPrice(entity.getPrice());
            videoCard2.setWarranty(entity.getWarranty());
            videoCard2.setType(entity.getType());
            videoCard2.setProducer(entity.getProducer());
            videoCard2.setFamily(entity.getFamily());
            videoCard2.setModel(entity.getModel());
            videoCard2.setSeries(entity.getSeries());
            videoCard2.setMemoryType(entity.getMemoryType());
            videoCard2.setMemorySize(entity.getMemorySize());
            videoCard2.setBusMemory(entity.getBusMemory());
            videoCard2.setOther(entity.getOther());
            return videoCard2;
        });

         videoCardRepository.save(videoCard1.get());
    }


    public Optional<VideoCard> findById(Integer idVideoCard) {
        return videoCardRepository.findById(idVideoCard);
    }

    public void deleteById(Integer idVideoCard) {
        videoCardRepository.deleteById(idVideoCard);
    }
}
