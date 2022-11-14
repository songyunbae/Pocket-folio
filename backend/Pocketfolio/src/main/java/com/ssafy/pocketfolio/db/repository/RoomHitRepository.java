package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.RoomHit;
import com.ssafy.pocketfolio.db.view.GuestListView;
import com.ssafy.pocketfolio.db.view.HitStatListView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface RoomHitRepository extends JpaRepository<RoomHit, Long>  {
    @Query(value = "SELECT COUNT(*) FROM room_hit WHERE hit_date = CURDATE() AND room_seq = ?1 ", nativeQuery = true)
    Long countRoomHitToday(long roomSeq);
    Long countAllByRoom_RoomSeq(Long roomSeq);
    Boolean existsRoomHitByUser_UserSeqAndRoom_RoomSeqAndHitDateEquals(long userSeq, long roomSeq, LocalDate date);
    @Query(value = "SELECT r.user_seq AS userSeq, user_name AS userName, user_profile AS userProfile, rh.hit_date AS hitDate FROM room_hit AS rh " +
            " JOIN ( SELECT r.*, u.name AS user_name, u.profile_pic AS user_profile FROM room AS r JOIN user AS u ON u.user_seq = r.user_seq ) r " +
            " ON r.user_seq = rh.user_seq WHERE rh.room_seq = ?1 ORDER BY hit_date DESC LIMIT 5 ;", nativeQuery = true)
    List<GuestListView> findGuest(Long roomSeq);

    @Query(value = "SELECT hit_date as `date`, count(room_hit_seq) as `count` FROM room_hit " +
            "WHERE hit_date BETWEEN DATE_ADD(NOW(), INTERVAL -1 WEEK) AND NOW() AND room_seq = ?1 GROUP BY `date`;", nativeQuery = true)
    List<HitStatListView> countAllByHitDateAndRoomSeq(long roomSeq);
}
