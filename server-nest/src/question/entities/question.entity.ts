import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// NOT READY, TYPEORM SO HARD FOR ME NOW
@Entity({ name: 'question' })
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  person_id: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 500 })
  text: string;

  @Column({ type: 'varchar', length: 150 })
  topic: string;

  @Column({ type: 'timestamp', nullable: false })
  repeat_1: Date;

  @Column({ type: 'timestamp', nullable: false })
  repeat_2: Date;

  @Column({ type: 'timestamp', nullable: false })
  repeat_3: Date;

  @Column({ type: 'timestamp', nullable: false })
  repeat_4: Date;

  @Column({ type: 'timestamp', nullable: false })
  repeat_5: Date;

  @Column({ type: 'timestamp', nullable: false })
  repeat_6: Date;

  @Column({ type: 'timestamp', nullable: false })
  repeat_7: Date;

  @Column({ type: 'timestamp', nullable: false })
  repeat_8: Date;

  @Column({ type: 'integer', nullable: false, default: 0 })
  repeat_status: number;
}
