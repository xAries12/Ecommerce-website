package com.dragomirgdaniel.licenta.video_card;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products/video_cards")
public class VideoCardController {
    private final VideoCardService videoCardService;

    public VideoCardController(VideoCardService videoCardService) {
        this.videoCardService = videoCardService;
    }
    @GetMapping
    public List<VideoCard> findAll() {
        return videoCardService.findAll();
    }
    @PostMapping
    public <S extends VideoCard> S save(@RequestBody S entity) {
        return videoCardService.save(entity);
    }
    @PutMapping("/{idVideoCard}")
    public void update(@RequestBody VideoCard entity,@PathVariable Integer idVideoCard) {
        videoCardService.update(entity, idVideoCard);
    }
    @GetMapping("/{idVideoCard}")
    public Optional<VideoCard> findById(@PathVariable Integer idVideoCard) {
        return videoCardService.findById(idVideoCard);
    }
    @DeleteMapping("/{idVideoCard}")
    public void deleteById(@PathVariable Integer idVideoCard) {
        videoCardService.deleteById(idVideoCard);
    }
}
