---
title: Home
panel: true
featuredNotes: ... # filter omitted for brevity
templateEngineOverride: njk, md
---

안녕하세요, <br>
zettel-developer 입니다.



## 소개

아침이슬을 그리워하는 사막모래입니다.

## 읽기 가이드

세 가지의 폴더가 존재합니다.<br>
일정한 포맷으로 글이 작성되고 있습니다.

## PROJECT

{{ collections.notes | query(featuredNotes) | renderAsList | safe }}

## AREA

