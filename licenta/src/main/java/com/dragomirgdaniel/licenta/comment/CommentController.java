package com.dragomirgdaniel.licenta.comment;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }
    @PostMapping
    public void createComment(@RequestBody CommentDto commentDto) {
        commentService.createComment(commentDto);
    }
    @DeleteMapping("/{idComment}")
    public void deleteById(@PathVariable Integer idComment) {
        commentService.deleteById(idComment);
    }
    @PutMapping("/updates")
    public void update(@RequestBody CommentDto commentDto) {
        commentService.update(commentDto);
    }
    @PutMapping("/updates/{idComment}")
    public void updateComment(@PathVariable Integer idComment) {
        commentService.updateComment(idComment);
    }
    @GetMapping("/allChecked")
    public List<Comment> findAllChecked() {
        return commentService.findAllChecked();
    }
    @GetMapping("/allUnChecked")
    public List<Comment> findAllUnChecked() {
        return commentService.findAllUnChecked();
    }
}
