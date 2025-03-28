---
sidebar_position: 3
---

# Fishing

คือ official game hook บนระบบ fields ที่ออกแบบมาเพื่อให้ผู้ใช้งานสามารถรับรางวัล esToken ผ่านกระบวนการ vesting โดยเชื่อมโยงกับ NFT ที่ถูกนำไปวางค้ำประกัน (Stake) ผ่านระบบ `CmdaoFieldsV2Router` เพื่อเพิ่ม hash rate และกำหนดระยะเวลา lock ของรางวัลที่ได้รับ ระบบนี้ถูกใช้ร่วมกับ Uniswap V3 Staker contract เพื่อสร้างแรงจูงใจให้กับผู้ใช้งาน

---

## วิธีการทำงาน

1. **รับรางวัลจาก Uniswap V3 Staker**  
   - ผู้ใช้ทำการ stake LP token บน Uniswap V3 Staker contract
   - ระบบจะมอบรางวัลเป็น esToken (เช่น esTuna) ให้กับผู้ใช้

2. **นำ esToken ไป vesting ผ่าน Fishing hook**  
   - ผู้ใช้สามารถนำ esToken ที่ได้รับไป vesting ใน FieldsHook003
   - ระยะเวลา lock ของ vesting ขึ้นอยู่กับ hash rate ของ NFT ที่ใช้ stake

3. **NFT Hash Rate ส่งผลต่อระยะเวลา vesting**  
   - NFT แต่ละตัวมี hash rate กำหนดไว้ล่วงหน้า
   - Hash rate จะถูกใช้คำนวณระยะเวลาการ vesting ของรางวัล
   - สูตรการคำนวณระยะเวลาการ vesting:
     ```solidity
     uint256 endTime = startTime + ((defaultVestingDuration * nftHashRate) / 100000);
     ```
     โดยที่:
     - `startTime` คือเวลาที่เริ่ม vesting
     - `defaultVestingDuration` คือระยะเวลา lock พื้นฐาน (เช่น 28 วัน)
     - `nftHashRate` คือค่าพลังของ NFT (เช่น 100,000 สำหรับ CommuDAO NFT)

4. **รับรางวัลเป็น cTuna หลังจาก vesting ครบกำหนด**  
   - เมื่อถึง `endTime` ผู้ใช้สามารถ claim รางวัลที่ vesting ไว้ได้
   - รางวัลจะถูกแจกจ่ายเป็น cTuna ซึ่งสามารถนำไปใช้ต่อในระบบ

---

## ตัวอย่างพารามิเตอร์

| Parameter             | Value                      |
|----------------------|--------------------------|
| **esToken**          | esTuna                    |
| **Max Supply**       | 1,000,000,000 (1 พันล้าน) |
| **Base Lock Duration** | 28 วัน                    |
| **Reward Token**     | cTuna                     |
| **NFT Hash Rate (CommuDAO NFT)** | 100,000 |
