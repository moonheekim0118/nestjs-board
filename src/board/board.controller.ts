import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.model';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get()
  getAllBoard(): Board[] {
    return this.boardService.getAllBoards();
  }
}
