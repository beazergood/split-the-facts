// import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Moment from 'react-moment'
import { FaPlayCircle, FaTimes } from 'react-icons/fa'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import Link from 'next/link'
import React, { useState } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import useDrag from './helpers/useDrag'
import useHideBodyScroll from './helpers/useHideBodyScroll'
import throttle from 'lodash/throttle'

export interface VideosRowProps {
  videos: any
  group: {
    title: string
    action: string
  }
}
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>

const onWheel = (
  apiObj: scrollVisibilityApiType,
  ev: React.WheelEvent
): void => {
  // NOTE: no good standard way to distinguish touchpad scrolling gestures
  // but can assume that gesture will affect X axis, mouse scroll only Y axis
  // of if deltaY too small probably is it touchpad
  const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15

  if (isTouchpad) {
    ev.stopPropagation()
    return
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext()
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev()
  }
}

export const VideosRow = ({ videos, group }) => {
  const [embedId, setEmbedId] = useState('')
  const [videoPlayerStyles, setStyles] = useState({
    display: 'none'
  })
  const [items, setItems] = useState(videos)
  const [selected, setSelected] = React.useState<string[]>([])
  const [position, setPosition] = React.useState(0)

  const isItemSelected = (id) => !!selected.find((el) => el === id)

  const handleClick = (video) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(video.id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== video.id)
        : currentSelected.concat(video.id)
    )

    setEmbedId(video.embed)
    setStyles(isItemSelected ? { display: 'none' } : { display: 'block' })
  }

  const { dragStart, dragStop, dragMove, dragging } = useDrag()

  const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => (
    ev: React.MouseEvent
  ) =>
    dragMove(ev, (newPos) => {
      if (scrollContainer.current) {
        const currentScroll = scrollContainer.current.scrollLeft
        scrollContainer.current.scrollLeft = currentScroll + newPos
      }
    })

  const handleItemClick = (itemId: string) => ({
    getItemById,
    scrollToItem
  }: scrollVisibilityApiType) => {
    if (dragging) {
      return false
    }
    const itemSelected = isItemSelected(itemId)

    setSelected((currentSelected: string[]) =>
      itemSelected
        ? currentSelected.filter((el) => el !== itemId)
        : currentSelected.concat(itemId)
    )

    if (!itemSelected) {
      // NOTE: center item on select
      scrollToItem(
        getItemById(itemId)?.entry?.target,
        'smooth',
        'center',
        'nearest'
      )
    }
  }

  const restorePosition = React.useCallback(
    ({ scrollContainer }: scrollVisibilityApiType) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft = position
      }
    },
    [position]
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const savePosition = React.useCallback(
    throttle(
      ({ scrollContainer }: scrollVisibilityApiType) =>
        !!scrollContainer.current &&
        setPosition(scrollContainer.current.scrollLeft),
      500
    ),
    []
  )

  // const { hideScroll, showScroll } = useHideBodyScroll()

  return (
    <div
      className="mx-auto my-3 relative px-3 py-4 bg-wall shadow-md "
      style={{ width: '95%' }}
    >
      <p className="ml-6 my-3 relative font-AveriaSerifLibre">
        <span className="text-xl">{group.title}</span> -{' '}
        <span className="text-md">{items.length} videos</span>
      </p>
      {/* <div onMouseEnter={hideScroll} onMouseLeave={showScroll}> */}
      <div>
        <div onMouseLeave={dragStop}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onInit={restorePosition}
            onScroll={savePosition}
            onWheel={onWheel}
            onMouseDown={() => (ev) => dragStart(ev)}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {items.map((video) => (
              <Card
                itemId={video.id}
                title={video.title}
                published={video.published}
                fullSlug={video.fullSlug}
                thumbnail_url={video.thumbnail_image.url}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </div>
  )
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <BsChevronCompactLeft />
    </Arrow>
  )
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <BsChevronCompactRight />
    </Arrow>
  )
}

function Card({ fullSlug, title, itemId, thumbnail_url, published }) {
  const visibility = React.useContext(VisibilityContext)

  return (
    <motion.div
      key={itemId}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer border- bg-white border-red-300 flex-shrink-0 shadow mx-4"
      style={{
        width: '260px'
      }}
      tabIndex={0}
    >
      <Link href={fullSlug}>
        <div className="flex flex-col items-center my-4">
          <div className="relative">
            <Image src={thumbnail_url} width={270} height={160} />
            <div className="absolute bottom-14 left-24">
              <FaPlayCircle className="text-white text-6xl opacity-70 " />
            </div>
          </div>

          <div className="w-full my-4 px-2">
            <p className="text-sm font-NotoSerif">{title}</p>
            <Moment format="D MMM YYYY" className="font-NotoSerif text-xs">
              {published}
            </Moment>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function Arrow({
  children,
  disabled,
  onClick
}: {
  children: React.ReactNode
  disabled: boolean
  onClick: VoidFunction
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        right: '1%',
        opacity: disabled ? '0' : '1',
        userSelect: 'none',
        background: '#fefefe'
      }}
    >
      {children}
    </button>
  )
}
